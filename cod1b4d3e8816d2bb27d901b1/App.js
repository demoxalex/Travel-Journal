import React from "react"
import data from "./data"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="main">
            <Navbar />
            <section className="card--main">
            {cards}
            </section>
        </div>
    )
}