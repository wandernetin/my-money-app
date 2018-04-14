import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getSummary} from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

        componentWillMount() {
                this.props.getSummary() 
        }

        render() {
                const { credit, debt } = this.props.summary
                return (
                        <div>
                                <ContentHeader title='Dashboard' small='Version 1.0' />
                                <Content>
                                        <Row>
                                                <ValueBox cols='12 4' color='green' icon='bank'
                                                        value={`AUD$ ${credit}`} text='Credit Total'/>
                                                <ValueBox cols='12 4' color='red' icon='credit-card'
                                                        value={`AUD$ ${debt}`} text='Debt Total'/>
                                                <ValueBox cols='12 4' color='blue' icon='money'
                                                        value={`AUD$ ${credit - debt}`} text='Consolided Total'/>
                                        </Row>
                                </Content>
                        </div>
                )
        }
}

const mapStateToProps = state => ({
        summary: state.dashboard.summary
})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
