import { ExclamationCircleOutlined } from "@ant-design/icons/lib/icons";

export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 10  }}>
      <ExclamationCircleOutlined />
       404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}
