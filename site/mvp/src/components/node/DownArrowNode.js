import { h } from '@logicflow/core'
import RectNode from './RectNode'

// 下箭头
class DownArrowModel extends RectNode.model {
  constructor(data, graphData) {
    super(data, graphData);
    this.width = 80;
    this.height = 100;
  }
}

class DownArrowView extends RectNode.view {
  getResizeShape() {
    const { x, y, width, height } = this.props.model
    const style = this.props.model.getNodeStyle()
    const ArrowWidth =  1/3 * width;
    const upY = y - 1/2 * height;
    const downY = y + 1/2 * height;
    const downY2 = y + 1/2 * height - 1/2 * width;
    const attrs = {
      ...style,
      x,
      y,
      width,
      height,
      points: [
        [x - 1/2 * ArrowWidth, downY2],
        [x - 1/2 * width, downY2],
        [x, downY],
        [x + 1/2 * width, downY2],
        [x + 1/2 * ArrowWidth, downY2],
        [x + 1/2 * ArrowWidth, upY],
        [x - 1/2 * ArrowWidth, upY],
      ]
    }
    
    return h('g', {}, [
      h('polygon', { ...attrs })
    ]
    );
  }
}

export default {
  type: 'down-arrow',
  view: DownArrowView,
  model: DownArrowModel
}