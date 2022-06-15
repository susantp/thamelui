import { useRecoilValue } from 'recoil'
import { sidebarState } from '../../store/atoms'

export default function useStyles () {
  const { open } = useRecoilValue(sidebarState)

  const customStyle = open
    ? 'flex flex-col w-60 fixed pt-32 bg-white border-gray-300 left-0 h-full overflow-auto drop-shadow-xl z-40 dark:bg-black dark:text-white  transition-all  duration-300 ease-in-out'
    : 'flex flex-col w-24 fixed pt-32 bg-white border-gray-300	left-0 h-full overflow-auto drop-shadow-xl  dark:bg-black dark:text-white transition-all  duration-300 ease-in-out'
  const fontDisplay = open
    ? 'ml-3 text-md '
    : 'hidden'
  const toggleBtnWidth = open
    ? ' flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-60 z-50'
    : ' flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-24'
  const linkDivStyle = open
    ? 'flex flex-row items-center cursor-pointer hover:bg-blue-400 hover:text-white  w-full p-4'
    : 'cursor-pointer hover:bg-blue-400 hover:block w-full p-6 '
  const imageWidth = open
    ? 'w-8'
    : 'w-8'

  return { customStyle, fontDisplay, toggleBtnWidth, imageWidth, linkDivStyle }
}
