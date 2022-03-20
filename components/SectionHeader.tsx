type SectionHeaderType = {
  name: string
}

const SectionHeader = ({name}: SectionHeaderType) => {
  return (
    <div className="mb-2">
      <h1 className='font-varela text-lg'>{name}</h1>
      <div className='h-1 w-10 bg-gray-300 dark:bg-zinc-700'></div>
    </div>
  )
}

export default SectionHeader