import { Vue } from 'vue-property-decorator'
import rxax from './rxToaxios'
export default class axVue extends Vue {
  apis$=rxax
}
