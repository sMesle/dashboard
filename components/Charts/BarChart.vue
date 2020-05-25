<script>
import { Bar } from 'vue-chartjs'
export default {
  name: 'BarChart',
  extends: Bar,
  props: {
    chartData: {
      type: Object,
      default: () => {
        return {
          labels: [],
          datasets: []
        }
      }
    },
    chartOptions: {
      type: Object,
      default: () => {
        return {
          options: []
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>
