export function converter(data: string | number, toFixedCount = 2): string {
  if (data === undefined || data === null) {
    return "0";
  }
  if (typeof data !== "string" && typeof data !== "number") {
    throw new TypeError("请输入数字字符串或者数字");
  }
  if (typeof data === "string") {
    if (isNaN(+data)) {
      throw new TypeError("请输入数字字符串或者数字");
    }
  }
  const tenThousand = 10000;
  const hundredMillion = tenThousand * tenThousand;
  const trillion = hundredMillion * tenThousand;
  const realNumber: number = +data;
  const positiveNumber: number = Math.abs(realNumber);
  if (positiveNumber < 10000) {
    return `${realNumber}`;
  }
  if (positiveNumber < hundredMillion) {
    const resNumber = positiveNumber / tenThousand;
    if (parseInt(String(resNumber), 10) === +resNumber.toFixed(toFixedCount)) {
      return `${parseInt(String(realNumber / tenThousand), 10)}万`;
    }
    return `${(realNumber / tenThousand).toFixed(toFixedCount)}万`;
  }
  if (positiveNumber < trillion) {
    const resNumber = positiveNumber / hundredMillion;
    if (parseInt(String(resNumber), 10) === +resNumber.toFixed(toFixedCount)) {
      return `${parseInt(String(realNumber / hundredMillion), 10)}亿`;
    }
    return `${(realNumber / hundredMillion).toFixed(toFixedCount)}亿`;
  }
  if (positiveNumber <= Number.MAX_SAFE_INTEGER) {
    const resNumber = positiveNumber / trillion;
    if (parseInt(String(resNumber), 10) === +resNumber.toFixed(toFixedCount)) {
      return `${parseInt(String(realNumber / trillion), 10)}万亿`;
    }
    return `${(realNumber / trillion).toFixed(toFixedCount)}万亿`;
  }

  return "超过了MAX_SAFE_INTEGER大小";
}
