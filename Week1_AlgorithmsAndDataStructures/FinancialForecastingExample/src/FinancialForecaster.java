import java.util.HashMap;
import java.util.Map;

public class FinancialForecaster {
    private Map<Integer, Double> cache = new HashMap<>();

    public double predictFutureValue(double initialValue, double[] growthRates, int years) {
        if (years == 0) {
            return initialValue;
        }

        int key = years;
        if (cache.containsKey(key)) {
            return cache.get(key);
        }

        double previousValue = predictFutureValue(initialValue, growthRates, years - 1);
        double growthRate = growthRates[(years - 1) % growthRates.length];
        double futureValue = previousValue * (1 + growthRate);

        cache.put(key, futureValue);
        return futureValue;
    }
}
