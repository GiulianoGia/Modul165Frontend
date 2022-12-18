import { defineComponent } from "vue";
import { Question } from "@/types/Question";
import { getAllQuestions } from "@/helper/question";
import { setQuiz } from "@/helper/quiz";
import store from "@/store";

export default defineComponent({
    name: 'QuestionCard',
    props: {
        title: String,
    },
    data() {
        return {
            questions: [] as Array<Question>,
            currentQuestionNumber: 0,
            pointsCount: 0,
            roundCount: 0
        }
    },
    watch: {
        points (newCount) {
            this.pointsCount = newCount;
        },
        round (newRound){
            this.roundCount = newRound;
        }
    },
    computed: {
        points() {
            return store.state.points
        },
        round() {
            return store.state.round;
        }
    },
    methods: {
        setQuiz() {
            setQuiz()
        },
        checkSelection(selection: string) {
            if (selection === this.questions[this.currentQuestionNumber].result) {
                this.showResult(selection, true);
            } else {
                this.showResult(selection, false);
            }
        },
        showResult(selection: string, result: boolean) {
            if (result === true) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                document.getElementById(selection)!.className = "show--true";
                setTimeout(() => {this.currentQuestionNumber++;}, 1000);
                store.state.round++;
                store.state.points += 100;
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                document.getElementById(selection)!.className = "show--false";
                store.state.fails++;
                store.state.points -= 50;
            }
        }
    },
    async created() {
        await getAllQuestions().then((response) => {
            this.questions = response;
            setInterval(() => { if(this.roundCount < 5) {store.state.time++}}, 1000)
        });
    },
})