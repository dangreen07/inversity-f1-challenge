import TyrePage from '@/app/tyre/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe("TirePage", () => {
    it("renders a heading", () => {
        render(<TyrePage />)

        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument()
    })

    it("renders the tire pressures", () => {
        render(<TyrePage />)

        const tirePressures = screen.getByRole("tire_pressures");

        expect(tirePressures).toBeInTheDocument()
    })
})