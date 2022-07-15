import React, {useState} from 'react'
import CardsView from './CardsView';
import Iconswitch from './IconSwitch'
import ListView from './ListView';

export default function Store({products}) {
  const [state, setState] = useState('view_list');
  function setView(view) {
    if (view === 'view_list') {
      setState('view_module')
    } else {
      setState('view_list')
    }
  }

  return (
    <React.Fragment>
      <Iconswitch icon={state} onSwitch={(view) => setView(view)}/>
      <div>
        {state === 'view_list' ? <ListView items={products}/> : <CardsView cards={products}/>}
      </div>
    </React.Fragment>
  )
}
