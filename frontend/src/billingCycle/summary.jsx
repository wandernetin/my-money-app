import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`AU$ ${credit}`} text='Credit Total ' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`AU$ ${debt}`} text='Debt Total ' />
                <ValueBox cols='12 4' color='blue' icon='money'
                    value={`AU$ ${credit - debt}`} text='Total ' />
            </Row>
        </fieldset>
    </Grid>
)