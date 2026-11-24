export const projects = [
  {
    slug: 'atlas-journal', title: 'Atlas Journal', kind: 'Website', className: 'atlas',
    lead: 'Một không gian đọc chậm, nơi nội dung và hình ảnh cùng kể chuyện.',
    tags: ['Nội dung', 'Trải nghiệm đọc', 'Responsive'],
    brief: 'Concept này đặt câu hỏi: một tạp chí số có thể khiến người đọc muốn ở lại với câu chuyện lâu hơn bằng cách nào?',
    approach: 'Bố cục ưu tiên nhịp đọc, khoảng trắng có chủ đích và hệ thống kiểu chữ linh hoạt. Hình ảnh mở đầu tạo bối cảnh, còn các thành phần nhỏ luôn phục vụ nội dung.',
    interactions: ['Chuyển từ mục lục sang bài viết mà không mất phương hướng', 'Đọc thoải mái trên điện thoại và màn hình lớn', 'Lưu một câu chuyện để quay lại sau']
  },
  {
    slug: 'forma', title: 'Forma', kind: 'Sản phẩm', className: 'forma',
    lead: 'Bảng công việc gọn gàng để tập trung vào điều quan trọng.',
    tags: ['Product UI', 'Tập trung', 'Tương tác'],
    brief: 'Concept về một công cụ làm việc cá nhân, nơi màn hình đầu tiên trả lời được câu hỏi “mình nên làm gì tiếp theo?”.',
    approach: 'Thông tin được nhóm theo mức ưu tiên thay vì tạo quá nhiều cột. Màu sắc chỉ xuất hiện ở các điểm cần quyết định, giúp giao diện yên tĩnh mà vẫn dễ quét.',
    interactions: ['Xem việc quan trọng trong ngày', 'Chuyển việc giữa các trạng thái rõ ràng', 'Thu gọn phần ít liên quan để giữ tập trung']
  },
  {
    slug: 'mori', title: 'Mori', kind: 'Web app', className: 'mori',
    lead: 'Khám phá những góc thú vị quanh mình theo một cách mới.',
    tags: ['Khám phá', 'Bản đồ', 'Bộ sưu tập'],
    brief: 'Một concept giúp việc chọn nơi để ghé thăm trở nên nhẹ nhàng hơn khi người dùng chưa biết chính xác mình đang tìm gì.',
    approach: 'Điểm khởi đầu là tâm trạng và quỹ thời gian, sau đó mới tới danh sách địa điểm. Thẻ thông tin ngắn gọn giữ cho việc so sánh dễ dàng.',
    interactions: ['Khám phá theo tâm trạng', 'Xem nhanh thông tin cốt lõi', 'Lưu nơi muốn ghé vào một danh sách riêng']
  }
];

export const articles = [
  {
    slug: 'giao-dien-ro-rang', title: 'Giao diện rõ ràng bắt đầu từ câu hỏi đúng', topic: 'Thiết kế', read: '4 phút',
    excerpt: 'Một vài cách suy nghĩ trước khi quyết định bố cục, màu sắc hay hiệu ứng.',
    sections: [
      ['Đừng bắt đầu từ khung hình', 'Khi mở một trang trắng, cảm giác tự nhiên là chọn màu, chọn chữ và sắp các khối. Nhưng giao diện sẽ dễ lạc hướng nếu chưa biết người xem cần làm gì. Một câu hỏi ngắn thường hữu ích hơn một bộ mockup đẹp: sau vài giây ở trang này, họ cần hiểu điều gì?'],
      ['Ưu tiên tạo ra nhịp đọc', 'Thông tin quan trọng nên xuất hiện ở nơi dễ thấy và có đủ khoảng thở. Những phần phụ vẫn cần hiện diện, nhưng không nên tranh sự chú ý với lời hứa chính của trang. Nhịp đọc tốt đến từ thứ tự, độ tương phản và độ dài của từng đoạn.'],
      ['Thử bằng nhiệm vụ thật', 'Một giao diện rõ ràng phải giúp người dùng hoàn thành việc của họ. Hãy thử giao cho một người khác nhiệm vụ cụ thể, quan sát chỗ họ dừng lại, rồi sửa đúng điểm đó. Sự rõ ràng thường đến từ nhiều lần bỏ bớt hơn là thêm vào.']
    ]
  },
  {
    slug: 'chi-tiet-nho', title: 'Chi tiết nhỏ tạo nên cảm giác sử dụng', topic: 'Frontend', read: '3 phút',
    excerpt: 'Khoảng cách, trạng thái và phản hồi là những phần dễ bị bỏ qua khi xây web.',
    sections: [
      ['Trạng thái cũng là nội dung', 'Một nút bấm không chỉ có trạng thái mặc định. Nó có lúc được rê chuột, nhận focus, đang tải, bị vô hiệu hóa hoặc vừa hoàn tất. Nếu các trạng thái này không rõ, người dùng phải đoán xem thao tác của mình đã có tác dụng chưa.'],
      ['Chuyển động cần có lý do', 'Chuyển động tốt giúp giữ bối cảnh: một bảng mở ra từ nơi người dùng vừa chọn, một thông báo xuất hiện sau khi lưu. Những chuyển động chỉ để gây chú ý rất nhanh trở thành tiếng ồn. Luôn dành một đường đi yên tĩnh cho người bật chế độ giảm chuyển động.'],
      ['Đo bằng cảm giác và bằng số', 'Hiệu năng không chỉ là chỉ số tải trang. Nó còn là độ trễ khi bấm, sự ổn định của bố cục và việc nội dung có hiện ra đúng lúc hay không. Những chi tiết nhỏ này cộng lại thành cảm giác tin cậy.']
    ]
  },
  {
    slug: 'xay-tung-buoc', title: 'Xây từng bước, chia sẻ khi còn đang học', topic: 'Quá trình', read: '3 phút',
    excerpt: 'Một bản nháp có thể hữu ích hơn một ý tưởng hoàn hảo chưa từng được thử.',
    sections: [
      ['Bắt đầu từ phần nhỏ nhất', 'Một ý tưởng lớn thường khó kiểm chứng vì có quá nhiều giả định. Chọn một tình huống cụ thể, làm cho tình huống ấy hoạt động, rồi mới mở rộng. Phiên bản đầu không cần bao quát mọi thứ; nó cần đủ rõ để nhận phản hồi.'],
      ['Ghi lại quyết định', 'Sau vài vòng chỉnh sửa, lý do của một lựa chọn rất dễ bị quên. Một ghi chú ngắn về vấn đề, phương án và điều đã học sẽ giúp lần xây tiếp theo nhanh hơn. Những ghi chú ấy cũng cho người khác thấy cách bạn nghĩ, không chỉ kết quả cuối.'],
      ['Giữ chỗ cho sự thay đổi', 'Khi đưa sản phẩm ra dùng, những dự đoán ban đầu có thể sai. Đó là thông tin quý. Một quy trình tốt không cố bảo vệ mọi quyết định cũ; nó cho phép thay đổi dựa trên điều đã quan sát.']
    ]
  }
];

