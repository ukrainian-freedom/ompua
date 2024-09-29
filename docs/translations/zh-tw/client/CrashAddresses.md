---
title: 當機位址
---

在下面的表格列出了目前已知的用戶端當機(Crash)地址，以利於未來在除錯時可以追蹤到問題來源，或是防止當機的發生。
大多數情況通常是伺服器端的腳本引起的，但也不排除其他可能(例如修改器等)。
不過幸好最近的版本都是比較穩定的。

| 發生機率 | 記憶體位址                  | 原因                                                                                                                                                                                                                      | 解決方法                                                                                                                                                                                                                                                                             |
| --------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 極低      | 0x00000000               | 用戶端尚未正確初始化。                                                                                                                                                                                                 | 通常可以試著重新安裝遊戲，並且確保在單人模式下可以正常運行，若是有安裝Mod，一般會建議刪除後再運行。                                                                                                                                                                                           |
| 極低      | 0x006E3D17               | 與人物外觀(Skin)相關。 一般會出現在玩家正在交通工具內，或是正在上下車時，進行更換外觀(Skin)的操作時會引發該問題。                                                                                                     | 確認玩家正處於步行的狀態後再進行相關操作即可。                                                                                                                                                                                                                           |
| 極低      | 0x0058370A               | 該問題比較難去追蹤來源，因為該問題通常與交通工具或是鏡頭相關。當伺服器端把玩家傳送至交通工具內部時，玩家轉移的虛擬世界尚未渲染完成所造的。 | 一般可以先在腳本前等待延遲數百毫秒後，再進行將玩家傳送至新交通工具內部的操作即可。亦可先使用SetCameraBehindPlayer後再將玩家傳送至交通工具內部。                                                                                 |
| 極低      | 0x0040F64C               | 在 Windows 7 或 Vista 上的權限問題。                                                                                                            | 可以試著重新命名GTASA的資料夾名稱。                                                                                                                                                                                                                |
| 極低      | 0x0059F8B4               | 用戶端無法正確讀取samp.img時就會出現該問題。                                                                                                  | 在管理員模式下重新安裝用戶端即可。
                                                                                                                                                                                        |
| 極低      | 0x00746929 或 0x0081214A | 用戶端設定檔出現問題。                                                                                                                                                                                      | 刪除我的文件->GTA San Andreas User Files資料夾裡的gta_sa.set通常即可解決。                                                                                                                                                                                                                                                                                |
| 偶爾  | 0x007F0BF7               | 一般與交通工具改裝有關，常發生在交通工具擁有錯誤的改裝升級ID才會造成該問題，或是用戶端本身改裝資料就有問題。                         | 使用腳本進行改裝交通工具的回傳(OnVehicleMod)檢查即可。                                                                                                                                                                                      |
| 偶爾  | 0x00544BC8               | 與物件(Object)相關的代碼，當物件過多的時候，會導致超過遊戲的物件限制，就有可能會出現該錯誤。                                                                                                      | 通常可以透過使用stream插件來解決物件過多的問題，但是會對伺服器的性能造成一定的影響。                                                            |
| 偶爾  | 0x00415D47 或 0x00536DF4 | 與物件(Object)相關的代碼，當讀取物件的紋理貼圖量過多時，就有可能出現該錯誤。                                                                                                                                  | 該問題較難追蹤與解決，因為它是屬於底層問題。有可能是因為物件的碰撞體所造成的，可以試著移除物件來解決問題。或是可以試著使用解除遊戲限制的插件來解決問題。 |

| 訊息                          | 原因                                                                                                                                                                                                                                                                                                                                                                                                                                               | 解決方法                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 應用程式發生例外 (0xc0000005) 於位置 0x5E5815 | 非常難查除問題來源，因為這個位置是所有代碼的基礎，它用於處理所有遊戲的基礎，比較有可能的原因是由於腳本，當玩家正進入交通工具時，又有呼叫其他函數(例如給予武器、傳送等)所造成的。 | 建議可以多次除錯來找出腳本問題來源。                                                |
| 應用程式發生例外 (0xc0000005) 於位置 0x534134  | 通常是因為 Windows 7 / Vista 的權限不足所造成的。                                                                                                                                                                                                                                                                                                                                                                                                          | 執行用戶端時，以管理員權限執行即可解決。 |
| 應用程式發生例外 (0xc0000005) 於位置 0x544BC8 | 請參照上表 0x00544BC8                                                                                                                                                                                                                                                                                                                                                                                                                                      | 請參照上表 0x00544BC8                                   |
| 應用程式發生例外 (0xc0000005) 於位置 0x536DF4 | 請參照上表 0x00544BC8                                                                                                                                                                                                                                                                                                                                                                                                                                      | 請參照上表 0x00544BC8                                   |
| 應用程式發生例外 (0xc0000005) 於位置 0x7F120E | 交通工具使用錯誤的改裝升級ID。                                                                                                                                                                                                                                                                                                                                                                                                                     | 請參照上表 0x007F0BF7               |