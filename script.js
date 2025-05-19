public class BuildingPerformance {
    private double energyConsumption; // kWh per bulan
    private double buildingArea;      // m²
    private double indoorTemp;        // °C
    private double co2Level;          // ppm
    private double humidity;          // %

    public BuildingPerformance(double energyConsumption, double buildingArea, double indoorTemp, double co2Level, double humidity) {
        this.energyConsumption = energyConsumption;
        this.buildingArea = buildingArea;
        this.indoorTemp = indoorTemp;
        this.co2Level = co2Level;
        this.humidity = humidity;
    }

    public String evaluateEnergyEfficiency() {
        double energyPerM2 = energyConsumption / buildingArea;
        if (energyPerM2 < 10) {
            return "Efisiensi Energi: Baik";
        } else if (energyPerM2 < 20) {
            return "Efisiensi Energi: Sedang";
        } else {
            return "Efisiensi Energi: Buruk";
        }
    }

    public String evaluateThermalComfort() {
        if (indoorTemp >= 22 && indoorTemp <= 26) {
            return "Kenyamanan Termal: Nyaman";
        } else if ((indoorTemp >= 20 && indoorTemp < 22) || (indoorTemp > 26 && indoorTemp <= 28)) {
            return "Kenyamanan Termal: Sedang";
        } else {
            return "Kenyamanan Termal: Tidak Nyaman";
        }
    }

    public String evaluateAirQuality() {
        if (co2Level < 600 && humidity >= 30 && humidity <= 60) {
            return "Kualitas Udara: Baik";
        } else if (co2Level < 1000 && humidity >= 20 && humidity <= 70) {
            return "Kualitas Udara: Sedang";
        } else {
            return "Kualitas Udara: Buruk";
        }
    }

    public void evaluateBuildingPerformance() {
        System.out.println("Energy Efficiency: " + evaluateEnergyEfficiency());
        System.out.println("Thermal Comfort: " + evaluateThermalComfort());
        System.out.println("Indoor Air Quality: " + evaluateAirQuality());
    }

    // Contoh penggunaan
    public static void main(String[] args) {
        BuildingPerformance building = new BuildingPerformance(1200, 100, 30, 500, 50);
        building.evaluateBuildingPerformance();
    }
}
