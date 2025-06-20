public class FinancialForecastingExample {
    public static void main(String[] args) {
        FinancialForecaster forecaster = new FinancialForecaster();
        double initialValue = 1000.0;
        double[] growthRates = {0.05, 0.03, 0.07};
        int years = 5;

        double futureValue = forecaster.predictFutureValue(initialValue, growthRates, years);
        System.out.printf("Predicted value after %d years: $%.2f%n", years, futureValue);
    }
}