const Orders = [
  {
    productName: "Calcium, Magnesium & Zink, 100 Caplets",
    productNumber: "003255",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Eye Admire Black Pearl Eye Patch",
    productNumber: "289568",
    paymentStatus: "Refunded",
    shipping: "Canceled",
  },
  {
    productName: "Gold C, Vitamin C, 1,000 mg, 240 Veggie Capsules",
    productNumber: "164352",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "Vitamin D3, 124 mcg, Fish Gelatin Softgels",
    productNumber: "012684",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Wheat Germ Oil, 16 fl oz (473 ml)",
    productNumber: "364291",
    paymentStatus: "Paid",
    shipping: "Shipped",
  },
  {
    productName: "Cold Pressed Organic Coconut Oil, 16 fl oz (473 ml)",
    productNumber: "005634",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
];

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.shipping === "Canceled"
        ? "danger"
        : order.shipping === "Shipped"
        ? "warning"
        : order.shipping === "Delivered"
        ? "success"
        : "primary"
    }">${order.shipping}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
