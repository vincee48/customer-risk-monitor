/* @flow */
'use strict';

import { bindActionCreators } from 'redux';

import * as BetActions from './Bet/actions';

export function mapStateToProps(state) {
    return { state: state };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...BetActions
    }, dispatch);
}
