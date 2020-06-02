document.addEventListener('DOMContentLoaded', (e) => {
	document.querySelector('input[type="button"].test-button-2').addEventListener('click', (e) => {
		alert('Clicked テストボタン2');
	});
	document.querySelectorAll('a[data-append-parameter]').forEach((a) =>
		a.addEventListener('click', (e) => {
			e.preventDefault();
			location.href = e.currentTarget.href + '?p=Tokyo+Olympics';
		})
	);
});

document.addEventListener('DOMContentLoaded', (e) => {
	window.setInterval(() => {
		const date = new Date(new Date('2020-07-22 00:00:00') - new Date());
		const years = 1970 - date.getFullYear();
		const months = date.getMonth();
		const days = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		const millsec = date.getMilliseconds();
		document.querySelector(
			'p.test-time'
		).textContent = `${years}年 ${months}ヶ月 ${days}日 ${hours}時間 ${minutes}分 ${seconds}.${millsec}秒`;
	}, 1);
});
