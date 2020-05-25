<script>
import { Line } from 'vue-chartjs'
export default {
  name: 'LineChart',
  extends: Line,
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
