import React from 'react'
import { Card, ProgressBar,Stack, Button } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

export default function BudgetCard({ name, amount, max, gray }) {
    const classNames = [];
    if (amount > max ) {
        classNames.push("bg-danger", "bg-opacity-10")
    } else if(gray) {
        classNames.push("bg-light")
    }
    return (
        <Card className = {classNames.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal">
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)}
                        <span className="text-muted fs-6 ms-1"> / {currencyFormatter.format(max)} </span>
                    </div>
                </Card.Title>
                <ProgressBar className="rounded-pill"
                varient={getProgressBarVarient(amount, max)}
                min={0}
                max={max}
                now={amount}
                />
                <Stack direction="horizontal" gap="2" className="mt-4">
                    <Button varient="outline-primary" className="ms-auto">
                        Add Expense
                        </Button>
                    <Button varient="outline-secondary">
                        View Expenses
                        </Button>
                </Stack>
            </Card.Body>

        </Card>
    )
}

function getProgressBarVarient(amount, max) {
    const ratio = amount / max;
       if (ratio < 0.5) {
        return "primary"
    }
    else if (ratio < 0.75) {
        return "warning"
    } else {
        return "danger"
    }

}