import { Component } from 'react'
import { fetchCommonData } from '../../api'
import Posts from '../Posts/Posts'
import { AppState, FetchCommonData } from './appTypes'

class App extends Component<Record<string,unknown>, AppState> {
  constructor(props: Record<string,unknown>) {
    super(props)
    this.state = {
      coord: {
        x: undefined,
        y: undefined,
      },
    } as AppState
  }
  componentDidMount = (): void => {
    fetchCommonData().then((data: FetchCommonData): void => {
      this.setState({ photos: data[0] })
    })
    window.addEventListener('mousemove', this.handlerMouseEvent)
  }

  componentWillUnmount = (): void => {
    window.removeEventListener('mousemove', this.handlerMouseEvent)
  }

  handlerMouseEvent = (e: MouseEvent) => {
    this.setState({ coord: { x: e.offsetX, y: e.offsetY } })
  }

  render() {
    const {
      photos,
      coord: { x, y },
    } = this.state

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {photos ? <Posts photos={photos} /> : 'Загрузка ...'}
        </div>
        <div style={{ position: 'fixed', top: '50%' }}>
          {x && y && `Координаты курсора: X: ${x} Y: ${x}`}
        </div>
      </div>
    )
  }
}

export default App
