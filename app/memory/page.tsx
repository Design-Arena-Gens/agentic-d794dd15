export const metadata = {
  title: 'Memory & Paging | The Typewriter OS Compendium',
  description: 'Paging, TLB, EAT, and page replacement ? with sketched intuition and numericals.'
};

export default function Page() {
  return (
    <article className="post" aria-labelledby="mem-title">
      <header>
        <h1 id="mem-title">Memory ? Where Addresses Become Stories</h1>
        <p className="muted">Mental picture: a drawer of index cards (pages), a tiny clerk (TLB) handing you the right card fast.</p>
      </header>

      <section>
        <h2>Paging in One Breath</h2>
        <p>
          Logical address ? page number + offset. Page number indexes the page table, which holds the frame. Offset
          carries through unchanged. TLB caches recent page?frame translations. On a TLB hit: instant. On a miss:
          you consult memory for the page table, then maybe fetch the page from disk if it?s not in memory.
        </p>
      </section>

      <section>
        <h2>Effective Access Time (EAT)</h2>
        <p>EAT = h ? (t_TLB + t_mem) + (1 ? h) ? (t_TLB + t_mem + t_mem)</p>
        <p>Why two memory touches on a miss? One to read the page table entry; one to read the data.</p>
      </section>

      <section>
        <h2>Worked Numerical ? EAT</h2>
        <p>t_TLB = 10 ns, t_mem = 100 ns, hit rate h = 0.95.</p>
        <p>EAT = 0.95?(10+100) + 0.05?(10+100+100) = 0.95?110 + 0.05?210 = 104.5 + 10.5 = 115 ns.</p>
      </section>

      <section>
        <h2>Page Replacement</h2>
        <ul>
          <li><b>Optimal</b>: replace the page used farthest in the future (oracle).</li>
          <li><b>FIFO</b>: replace the oldest loaded; can incur Belady?s anomaly.</li>
          <li><b>LRU</b>: replace the least recently used; a good practical proxy for locality.</li>
          <li><b>LFU</b>: replace least frequently used; can stick with old hot pages without aging.</li>
        </ul>
      </section>

      <section>
        <h2>Worked Numerical ? LRU Page Faults</h2>
        <p>Reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2 with 3 frames.</p>
        <p>Trace quickly (draw three boxes, evict the least recently used): total faults = 9.</p>
      </section>

      <section>
        <h2>Frame Allocation Intuition</h2>
        <ul>
          <li>Proportional: allocate frames in proportion to process size.</li>
          <li>Equal: simple but unfair to large processes.</li>
          <li>Working Set: give each process enough frames to hold its current locality; throttle if it grows.</li>
        </ul>
      </section>
    </article>
  );
}
