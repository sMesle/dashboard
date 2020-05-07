<template>
  <div>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.header"
        cols="12"
        md="6"
        lg="3"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
          :style="{background: $vuetify.theme.themes.dark.background1}"
        >
          <v-list-item>
            <v-icon x-large :color="card.fill">
              {{ card.icon }}
            </v-icon>

            <v-list-item-content>
              <v-list-item-title class="text-right grey--text text--lighten-3">
                {{ card.header }}
              </v-list-item-title>
              <v-list-item-subtitle class="title text-right grey--text text--lighten-4">
                {{ card.info }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr>
          <v-card-actions>
            <v-btn text class="text-lowercase font-weight-thin caption">
              <v-icon small class="mr-3">
                {{ card.subicon }}
              </v-icon>
              {{ card.action }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col
        v-for="chart in charts"
        :key="chart.data.datasets.label"
        cols="12"
        lg="6"
      >
        <div v-if="chart.type === 'line'">
          <line-chart
            :chart-data="chart.data"
            :chart-options="chartOptions"
          />
        </div>
        <div v-else>
          <bar-chart
            :chart-data="chart.data"
            :chart-options="chartOptions"
          />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Projects</h2>
        <v-data-table
          :headers="tableHeader"
          :items="projects"
          :sort-by="['name', 'deadline', 'progress']"
          hide-default-footer
        >
          <template v-slot:top="{item}">
            <v-dialog v-model="dialog">
              <v-card>
                <v-card-title>
                  <v-container>
                    <v-row>
                      <v-col cols="6" offset="3">
                        Edit Project
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="6" offset="3">
                        <!-- <v-text-field :label="{item}" disabled /> -->
                        <v-text-field v-model="editedProject.deadline" type="text" name="deadline" label="Project New Deadline" />
                        <v-text-field
                          v-model="editedProject.progress"
                          type="number"
                          max="100"
                          min="0"
                          name="progress"
                          label="Project New Progress"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-spacer />
                <v-card-actions>
                  <v-container>
                    <v-row justify="end">
                      <v-col cols="6" offset="3">
                        <v-btn color="blue darken-1" text @click="dialog = false">
                          Cancel
                        </v-btn>
                        <v-btn text @click="editProject(item)">
                          Save
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>

          <template v-slot:item.progress="{item}">
            {{ item.progress }}%
            <v-progress-linear :value="item.progress" :color="item.color" />
          </template>

          <template v-slot:item.actions="{item}">
            <v-icon small @click="dialog = true">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteProject(item)">
              delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LineChart from '../components/Charts/LineChart'
import BarChart from '../components/Charts/BarChart'
export default {
  components: {
    LineChart,
    BarChart
  },
  data () {
    return {
      dialog: false,
      editedProject: {
        // name: '',
        deadline: '',
        progress: ''
      },
      cards: [
        {
          header: 'Capacity',
          info: '12GB / 100GB',
          icon: 'cloud',
          action: 'update now',
          subicon: 'cached',
          fill: 'rgba(54, 162, 235, 0.5)'
        },
        {
          header: 'Message',
          info: '158',
          icon: 'message',
          action: 'mark unread',
          subicon: 'markunread',
          fill: 'rgba(255, 206, 86, 1)'
        },
        {
          header: 'Followers',
          info: '72',
          icon: 'person',
          action: 'take feedback',
          subicon: 'timeline',
          fill: 'rgba(255, 99, 132, 1)'
        },
        {
          header: 'Following',
          info: '72',
          icon: 'person',
          action: 'take feedback',
          subicon: 'timeline',
          fill: 'rgba(75, 192, 192, 1)'
        }
      ],
      charts: {
        linechart: {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Website Visiting',
                // data: [52, 89, 12, 13, 78, 95, 145, 25, 45, 156, 78, 17],
                backgroundColor: ['rgba(54, 162, 235, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                hoverBorderWidth: 2
              },
              {
                label: 'Adding New Users',
                // data: [89, 654, 412, 344, 132, 546, 120, 65, 145, 121, 56, 98],
                backgroundColor: ['rgba(255, 99, 132, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                hoverBorderWidth: 2
              }
            ]
          }
        },
        barchart: {
          type: 'bar',
          data: {
            labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            datasets: [
              {
                label: 'Yearly Sales',
                // data: ['159.849', '26.123', '45.235', '121.655', '98.165', '122.157', '198.561', '216.123', '250.696', '354.153', '213.478', '417.359'],
                borderColor: 'rgba(90, 255, 88, 0.8)',
                borderWidth: 3,
                barPercentage: 0.5,
                barThickness: 20,
                minBarLength: 2
              }
            ]
          }
        }
      },
      chartOptions: {
        // legend: { // duplicate key error
        //   labels: {
        //     fontColor: '#ccc'
        //   }
        // },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#878787'
            },
            gridLines: {
              display: true,
              color: '#4D4E4F'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: '#878787'
            },
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },
      tableHeader: [
        { text: 'Name', align: 'start', value: 'name' },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Progress', value: 'progress' },
        { text: 'Actions', value: 'actions', align: 'center', sortable: false }
      ]
    }
  },
  computed: {
    projects: {
      get () {
        return this.$store.state.projects.projects
      }
    }
  },
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.charts.linechart.data.datasets[0].data = this.randomNumber(1000)
      this.charts.linechart.data.datasets[1].data = this.randomNumber(500)
      this.charts.barchart.data.datasets[0].data = this.randomNumber(100000, 3)
    },
    randomNumber (x, y = 0) {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push((Math.random() * (1000 - 1) + 1).toFixed(y))
      }
      return arr
    },
    editProject (item) {
      // eslint-disable-next-line no-labels
      TODO:
      console.log(item) /* eslint no-console: ["error", { allow: ["log", "error"] }] */
      if (this.editedProject.deadline.length >= 2 && (this.editedProject.progress <= 100 && this.editedProject.progress >= 0)) {
        this.$store.commit('projects/EDIT_PROJECT', {
          id: item.id,
          progress: this.editedProject.progress,
          deadline: this.editedProject.deadline
        })
        this.dialog = false
        this.editedProject = {}
      }
    },
    deleteProject (item) {
      this.$store.commit('projects/DELETE_PROJECT', item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
hr{
  border: none;
  border-bottom: 1px solid #707070;
  margin-left: 8px;
  margin-right: 8px;
}
i{
  cursor: pointer;
}
</style>
