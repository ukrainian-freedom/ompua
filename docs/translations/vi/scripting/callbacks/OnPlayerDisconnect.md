---
title: OnPlayerDisconnect
description: Callback này được gọi khi một người chơi rời khỏi server.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi rời khỏi server.

| Tên       | Mô Tả                                              |
| ---------- | -------------------------------------------------- |
| playerid   | ID của người chơi đã rời khỏi server.             |
| reason     | Lý do rời khỏi server. Xem bảng dưới đây.         |

## Trả Về

0 - Sẽ ngăn các filterscripts khác nhận được callback này.

1 - Chỉ ra rằng callback này sẽ được chuyển đến filterscript tiếp theo.

Callback này luôn được gọi đầu tiên trong filterscripts.

## Các Lý Do

| ID | Lý Do        | Chi Tiết                                                                               |
| -- | ------------- | --------------------------------------------------------------------------------------- |
| 0  | Timeout/Crash | Kết nối của người chơi đã bị mất. Có thể là do trò chơi bị treo hoặc lỗi mạng.         |
| 1  | Quit          | Người chơi rời khỏi server một cách chủ động, qua lệnh /quit (/q) hoặc qua menu tạm dừng. |
| 2  | Kick/Ban      | Người chơi bị đá khỏi server hoặc bị cấm.                                                |
| 3  | Custom        | Được sử dụng bởi một số thư viện. Dành riêng cho các mục đích cá nhân của các chế độ.   |
| 4  | Mode End      | Chế độ hiện tại đang kết thúc nên tất cả người chơi bị ngắt kết nối (họ vẫn ở trên server).|

:::warning

Lý do 3 được thêm vào SA:MP bởi [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

Lý do 3 và 4 được thêm bởi server Open Multiplayer.  

:::

## Ví Dụ

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[5][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban",
        "Custom",
        "Mode End"
    };

    format(szString, sizeof szString, "%s đã rời khỏi server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Ghi Chú

:::tip

Một số hàm có thể không hoạt động chính xác khi sử dụng trong callback này vì người chơi đã bị ngắt kết nối khi callback được gọi. Điều này có nghĩa là bạn không thể lấy thông tin rõ ràng từ các hàm như [GetPlayerIp](GetPlayerIp) và [GetPlayerPos](GetPlayerPos).

Vấn đề này được giải quyết trong server open.mp.

:::

## Các Callback Liên Quan

- [OnPlayerConnect](OnPlayerConnect): Callback này được gọi khi một người chơi kết nối đến server.
- [OnIncomingConnection](OnIncomingConnection): Callback này được gọi khi một người chơi đang cố gắng kết nối đến server.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Callback này được gọi khi một người chơi hoàn thành việc tải xuống các mô hình tùy chỉnh.