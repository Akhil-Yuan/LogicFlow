// import { h } from '@logicflow/core'
import { h } from '@logicflow/core'
import { RectResize } from '@logicflow/extension'

class ActorModel extends RectResize.model {

}

class ActorView extends RectResize.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model
    const style = this.props.model.getNodeStyle
    const attrs = {
      ...style,
      x,
      y,
      width,
      height
    }
    console.log(attrs)
    return h('g', {}, [
      h('circle', {
        ...attrs,
        r: width
      })
    ])
  }
}

export default {
  type: 'actor',
  view: ActorView,
  model: ActorModel
}