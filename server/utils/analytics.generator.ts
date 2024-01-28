import { Document, Model } from 'mongoose';

interface MonthData {
  month: string;
  count: number;
}

export async function generateLast12MonthsData<T extends Document>(
  model: Model<T>
): Promise<{ last12Months: MonthData[] }> {
  try {
    const last12Months: MonthData[] = [];
    const currentDate = new Date();

    for (let i = 11; i >= 0; i--) {
      const endDate = new Date(currentDate);
      endDate.setMonth(currentDate.getMonth() - i);

      const startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - 28);

      const monthYear = endDate.toLocaleDateString("default", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      const count = await model.countDocuments({
        createdAt: { $gte: startDate, $lte: endDate },
      });

      last12Months.push({ month: monthYear, count });
    }

    return { last12Months };
  } catch (error) {
    // Handle errors (e.g., log or throw)
    console.error('Error in generateLast12MonthsData:', error);
    throw error;
  }
}
