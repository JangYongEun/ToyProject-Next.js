import { NextSeo } from "next-seo";

export default function Seo() {
  return ( 
    <>
      <NextSeo
        title="FIND&FICTURE"
        description="사진 속 정보찾기"
        canonical="http://localhost:3000/"
        openGraph={{
          type: "website",
          url: "http://localhost:3000/",
          title: "사진 속 정보찾기",
          description: "사진 속 정보찾기",
          images: [{ url: "https://t1.daumcdn.net/cfile/tistory/9991BA4A5B52C8931C" }],
          site_name: "FIND&FICTURE",
        }}
      />
    </>
)
}
