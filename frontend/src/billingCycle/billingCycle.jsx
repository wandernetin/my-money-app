import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTab, showTabs} from '../common/tab/tabActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import tabsHeader from '../common/tab/tabsHeader';
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

class BillingCycle extends Component {

        componentWillMount() {
                this.props.selectTab('tabList')
                this.props.showTabs('tabList, tabCreate')
        }

        render () {
                return (
                        <div>
                                <ContentHeader title='Billing Cycles' small='Register' />
                                <Content>
                                        <Tabs>
                                                <TabsHeader>
                                                        <TabHeader label='List' icon='bars' target='tabList' />
                                                        <TabHeader label='Create' icon='plus' target='tabCreate' />
                                                        <TabHeader label='Update' icon='pencil' target='tabUpdate' />
                                                        <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
                                                </TabsHeader>
                                                <TabsContent>
                                                        <TabContent id='tabList'><h1>List</h1></TabContent>
                                                        <TabContent id='tabCreate'><h1>Create</h1></TabContent>
                                                        <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
                                                        <TabContent id='tabDelete'><h1>Delete</h1></TabContent> 
                                                </TabsContent>
                                        </Tabs> 
                                </Content>
                        </div>
                )
        }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)