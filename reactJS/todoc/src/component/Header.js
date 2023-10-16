import dummy from '../db/Day.json';

export default function Header(){
    return (
        <>
        <h1>To Doc</h1>
        <h2>1 week, October</h2>
        <ul className="day-list list">
            {dummy.days.map(day=>(
                <li className="day-number" key={day.id}>Day {day.day}</li>
            ))
            }
        </ul>
        </>
    )
}