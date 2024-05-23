import { Component } from 'react';

export default class EagerComponent extends Component {
  constructor(props) {
    super(props);
    this.navigationFocusListener = this.props.navigation.addListener(
      'focus',
      () => {
        this.onFocus();
      }
    );
  }
}
