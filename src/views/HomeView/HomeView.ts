import QuestionCard from "@/components/QuestionCard/QuestionCard.vue";
import { createCookie, getCookie } from "@/helper/cookie";
import router from "@/router";
import { defineComponent } from "vue";
import Quiz  from '@/mocks/Quiz.json'
import store from "@/store";

export default defineComponent({
    name: 'HomeView',
    data() {
        return {
            username: '',
            quiz: Quiz,
            roundNumber: 0,
            failsCount: 0,
            pointsCount: 0,
            timeCount: 0
        }
    },
    components: {
        QuestionCard
    },
    computed: {
        fails () {
          return store.state.fails
          // Or return basket.getters.fruitsCount
          // (depends on your design decisions).
        },
        round () {
            return store.state.round
            // Or return basket.getters.fruitsCount
            // (depends on your design decisions).
        },
        points () {
            return store.state.points
            // Or return basket.getters.fruitsCount
            // (depends on your design decisions).
        },
        time () {
            return store.state.time
        }
    },
    watch: {
        fails (newFails) {
          this.failsCount = newFails;
        },
        round (newRound) {
            this.roundNumber = newRound;
        },
        points (newCount) {
            this.pointsCount = newCount;
        },
        time (newTime) {
            this.timeCount = newTime;
        }
    },
    mounted() {
        if (this.username === '' && getCookie('username') == null) {
            const username = prompt("Please enter your Username");
            if (username !== null && username !== '') {
                this.username = username;
                createCookie(this.username);
            } else {
                router.push('error');
            }
        } else {
            this.username = this.getUsername();
        }
    },
    methods: {
        getUsername(): string {
            // eslint-disable-next-line
            const username = getCookie("username")!;
            return username;
        }
    }
});