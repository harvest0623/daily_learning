import Calendar from './Calendar'

export default function App() {
    return (
        <div>
            <Calendar onChange={(date) => {
                alert(date.toLocaleDateString())
            }}></Calendar>
        </div>
    )
}
