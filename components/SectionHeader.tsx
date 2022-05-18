type SectionHeaderType = {
  name: string
}

const SectionHeader = ({name}: SectionHeaderType) => {
  return (
    <div className="mb-2 flex">
      <div className='font-varela font-bold antialiased text-lg text-gray-700 dark:text-gray-100'>
        {name}
        <div className='h-0.5 w-full rounded bg-gray-400 dark:bg-zinc-600'></div>
      </div>
    </div>
  )
}

export default SectionHeader