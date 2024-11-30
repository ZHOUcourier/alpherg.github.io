document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        if (pre.offsetHeight > 300) {
            // 设置容器样式
            pre.style.maxHeight = '300px';
            pre.style.overflow = 'hidden';
            
            // 创建展开按钮
            const expandBtn = document.createElement('div');
            expandBtn.className = 'code-expand-btn';
            expandBtn.innerHTML = '<i class="iconfont icon-down"></i> 展开代码';
            
            let isExpanded = false;
            expandBtn.onclick = function() {
                if (isExpanded) {
                    pre.style.maxHeight = '300px';
                    pre.style.overflow = 'hidden';
                    expandBtn.innerHTML = '<i class="iconfont icon-down"></i> 展开代码';
                } else {
                    pre.style.maxHeight = 'none';
                    pre.style.overflow = 'visible';
                    expandBtn.innerHTML = '<i class="iconfont icon-up"></i> 收起代码';
                }
                isExpanded = !isExpanded;
            };
            
            pre.style.position = 'relative';
            pre.appendChild(expandBtn);
        }
    });
});