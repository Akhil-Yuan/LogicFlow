import { h } from '@logicflow/core'
import { RectResize } from '@logicflow/extension'
import { getShapeStyleFuction, getTextStyleFunction } from './getShapeStyleUtil'

class ParallelogramModel extends RectResize.model {
  getNodeStyle() {
    const style = super.getNodeStyle()
    const properties = this.getProperties()
    return getShapeStyleFuction(style, properties)
  }

  getTextStyle() {
    const style = super.getTextStyle()
    const properties = this.getProperties()
    return getTextStyleFunction(style, properties)
  }
}

class ParallelogramView extends RectResize.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model;
    const style = this.props.model.getNodeStyle();
    const attrs = {
      ...style,
      x,
      y,
      width,
      height,
      points: [
        [x - 50, y + 40],
        [x - 30, y - 40],
        [x + 50, y - 40],
        [x + 30, y + 40]
      ]
    }
    return h("g", {}, [
      h("polygon", { ...attrs })
    ]
    )
  }
}

export default {
  type: 'parallelogram',
  view: ParallelogramView,
  model: ParallelogramModel
}