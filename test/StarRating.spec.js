import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StarRating from '../src/StarRating';

// http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/
describe("<StarRating />", () => {
  
  beforeEach(function () {
    this.component = TestUtils.renderIntoDocument(
      <StarRating 
        name="test-rating" 
        size={30}
        rating={5} 
        editing={true} 
        totalStars={5} 
        step={1} />
      );
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
  });

  it("renders the correct structure", function () {
    // <span class="rsr-container">
    //   <div class="rsr-root rsr--editing">
    //     <div class="rsr" data-content="*****">
    //       <div class="rsr__star" data-content="*****"></div>
    //       <input type="number" 
    //         name="test-rating"
    //         value="0"
    //         style="display:none !imporant"
    //         min="0"
    //         max="5"
    //         readonly="">
    //     </div>
    //   </div>
    // </span>
    var root = this.renderedDOM();
    expect(root.tagName).to.equal('SPAN');
    expect(root.className).to.contain('rsr-container');
    expect(root.children[0].className).to.contain('rsr-root');
    expect(root.children[0].className).to.contain('rsr--editing');
    expect(root.querySelectorAll('.rsr__star path').length).to.equal(5);
  });

  xit("should findRenderedDOMComponentWithClass", function () {

    // TestUtils.findRenderedDOMComponentWithClass(root, 'rsr-container');
  });

  it("should render a root in a container with proper classes", function () {
    var container = TestUtils.findRenderedDOMComponentWithTag(this.component, 'span');
    expect(container.props.className).to.equal('rsr-container');

    var root = TestUtils.findRenderedDOMComponentWithTag(this.component, 'div');
    expect(root.props.className).to.contain('rsr-root');
  });

});