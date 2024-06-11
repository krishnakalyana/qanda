import CreateFuss from '@/app/(private)/createfuss/_createFussComponents/CreateFuss'
import InterceptorModal from '@/components/common/InterceptorModal'

const Page = () => {
  console.log('called iinnn')

  return (
    <InterceptorModal>
      <CreateFuss />
    </InterceptorModal>
  )
}
export default Page
