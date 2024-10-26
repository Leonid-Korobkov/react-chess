import { Figure } from '../models/figures/Figure'

interface LostFiguresProps {
  title: string
  figures: Figure[]
  className?: string
}

function LostFigures({ title, figures, className }: LostFiguresProps) {
  return (
    <div className={`lost-figure ${className}`}>
      <div>{title}</div>
      {figures.map((figure) => {
        return (
          <div key={figure.id}>
            {figure.name}
            {figure.logo && <img src={figure.logo} alt='' />}
          </div>
        )
      })}
    </div>
  )
}

export default LostFigures
