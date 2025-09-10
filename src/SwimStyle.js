import React, { useState } from "react";

const swimData = {
  breaststroke: {
    name: "Breaststroke",
    desc: "Bơi ếch là kiểu bơi phổ biến, động tác tay và chân phối hợp nhịp nhàng. Thích hợp cho người mới bắt đầu.",
    steps: [
      "1. Tư thế chuẩn bị: Duỗi người thẳng, hai tay duỗi về phía trước, hai chân khép lại.",
      "2. Động tác tay: Kéo hai tay sang hai bên, lòng bàn tay hướng ra ngoài, sau đó thu về trước ngực, khuỷu tay cao hơn bàn tay.",
      "3. Động tác chân: Đạp chân sang hai bên, gập gối, bàn chân hướng ra ngoài, sau đó khép chân lại mạnh mẽ để tạo lực đẩy.",
      "4. Phối hợp: Khi tay thu về ngực thì đồng thời đạp chân, sau đó duỗi thẳng tay và chân để lướt nước.",
      "5. Nhịp thở: Hít vào khi tay thu về ngực, thở ra khi duỗi tay và chân ra phía trước.",
      "6. Lưu ý: Giữ thân người nổi, đầu hơi ngẩng, mắt nhìn xuống đáy hồ, động tác đều và nhịp nhàng.",
    ],
    video: "https://www.youtube.com/embed/-BSQe6q93h4",
  },
  backstroke: {
    name: "Backstroke",
    desc: "Bơi ngửa giúp phát triển cơ lưng, động tác tay luân phiên, chân đạp nước liên tục.",
    steps: [
      "1. Tư thế chuẩn bị: Nằm ngửa trên mặt nước, thân người thẳng, đầu ngẩng vừa phải, mắt nhìn lên trần hoặc trời.",
      "2. Động tác tay: Hai tay luân phiên quạt nước từ phía trên đầu về phía hông, lòng bàn tay hướng ra ngoài khi vào nước, khuỷu tay hơi cong khi kéo nước.",
      "3. Động tác chân: Chân đạp nước liên tục, động tác giống như đá chân khi đi bộ, cổ chân thả lỏng, đạp nhẹ và đều.",
      "4. Phối hợp: Khi một tay quạt nước thì tay kia chuẩn bị đưa lên phía trên đầu, chân luôn đạp nước không ngừng.",
      "5. Nhịp thở: Thở tự nhiên, miệng luôn trên mặt nước, hít thở đều và sâu.",
      "6. Lưu ý: Giữ thân người nổi, không để mông chìm, động tác tay và chân phải liên tục, nhịp nhàng.",
    ],
    video: "https://www.youtube.com/embed/NZNWYwcLaYs",
  },
  freestyle: {
    name: "Freestyle",
    desc: "Bơi tự do là kiểu bơi nhanh nhất, động tác tay và chân liên tục, phối hợp nhịp thở.",
    steps: [
      "1. Tư thế chuẩn bị: Duỗi người thẳng, mặt úp xuống nước, thân người nổi ngang mặt nước.",
      "2. Động tác tay: Hai tay luân phiên quạt nước, một tay quạt về phía sau, tay kia chuẩn bị đưa lên phía trước, khuỷu tay cao khi ra khỏi nước.",
      "3. Động tác chân: Chân đập nước liên tục, động tác nhỏ, cổ chân thả lỏng, đập đều để giữ thân người nổi.",
      "4. Phối hợp: Khi tay quạt nước thì chân luôn đập, đầu quay sang bên để lấy hơi khi cần, không ngẩng đầu lên quá cao.",
      "5. Nhịp thở: Quay đầu sang bên (theo tay quạt) để hít vào, thở ra dưới nước, phối hợp nhịp thở với động tác tay.",
      "6. Lưu ý: Giữ thân người thẳng, động tác tay và chân liên tục, nhịp nhàng, không gồng cơ quá mức.",
    ],
    video: "https://www.youtube.com/embed/9Oq8go0n08c",
  },
  butterfly: {
    name: "Butterfly",
    desc: "Bơi bướm đòi hỏi kỹ thuật cao, động tác tay mạnh mẽ, chân đập sóng đôi.",
    steps: [
      "1. Tư thế chuẩn bị: Duỗi người thẳng, hai tay duỗi về phía trước, hai chân khép lại.",
      "2. Động tác tay: Hai tay cùng quạt nước về phía trước, sau đó kéo mạnh về phía sau, khuỷu tay cao, lòng bàn tay hướng xuống.",
      "3. Động tác chân: Chân đập sóng đôi, hai chân khép sát, đập mạnh từ hông xuống, động tác giống như cá heo.",
      "4. Phối hợp: Khi tay kéo về phía sau thì đồng thời đập chân mạnh, đầu nhấc lên lấy hơi, sau đó duỗi thẳng tay và chân để lướt nước.",
      "5. Nhịp thở: Hít vào khi đầu nhấc lên, thở ra khi đầu úp xuống nước.",
      "6. Lưu ý: Động tác phải liên tục, mạnh mẽ, phối hợp nhịp nhàng giữa tay, chân và hơi thở.",
    ],
    video: "https://www.youtube.com/embed/r2aRqJHrjFg",
  },
};

function SwimStyle() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h2>Các kiểu bơi</h2>
      <div className="swim-styles">
        {Object.keys(swimData).map((key) => (
          <button key={key} onClick={() => setSelected(key)}>
            {swimData[key].name}
          </button>
        ))}
      </div>
      <div className="style-detail">
        {selected && (
          <div>
            <h3>{swimData[selected].name}</h3>
            <p>{swimData[selected].desc}</p>
            <ul>
              {swimData[selected].steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
            <div className="video-demo">
              <iframe
                width="100%"
                height="315"
                src={swimData[selected].video}
                title="Video demo"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwimStyle;
