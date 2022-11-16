import clsx from 'clsx'
import Link from 'next/link'

import { TabType } from '..'

export default function AppTab({ tabs, role }) {
  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul
          className={clsx('flex flex-wrap -mb-px text-sm font-medium text-center', {
            'justify-center': role === 'children',
          })}
          id="myTab"
        >
          {tabs.map((tab: TabType) => {
            return (
              <li className="mr-2" key={tab.text}>
                <Link href={`${tab.url}`}>
                  <button
                    className={clsx(
                      'inline-block p-4  text-["#004b8f"] w-[250px]',
                      {
                        'bg-[#004b8f] text-white': tab.active && role === 'parent',
                      },
                      { 'hover:bg-[#004b8f] hover:text-[#fff]': role === 'parent' },
                      { 'hover:border-[#004b8f] border-b-2': role === 'children' },
                      { 'border-[#004b8f] border-b-2': tab.active && role === 'children' }
                    )}
                    id="profile-tab"
                    type="button"
                  >
                    {tab.text}
                  </button>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
