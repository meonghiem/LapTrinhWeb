import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useCounterStore } from 'src/stores/hooks'

const Counter = function Counter() {
  const store = useCounterStore()

  useEffect(() => {
    const id = setTimeout(() => {
      store.start()
    }, 1000)

    return () => {
      clearTimeout(id)
      store.stop()
    }
  }, [store])

  return (
    <>
      <div className="counter">{store.counter}</div>
    </>
  )
}

export default observer(Counter)
