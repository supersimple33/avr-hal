(function() {var implementors = {
"embedded_storage":[["impl&lt;'a, R, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"embedded_storage/iter/struct.OverlapIterator.html\" title=\"struct embedded_storage::iter::OverlapIterator\">OverlapIterator</a>&lt;'a, R, I&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"embedded_storage/trait.Region.html\" title=\"trait embedded_storage::Region\">Region</a>,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = R&gt;,</div>"]],
"heapless":[["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.IndexMapIter.html\" title=\"struct heapless::IndexMapIter\">Iter</a>&lt;'a, K, V&gt;"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.IndexMapIterMut.html\" title=\"struct heapless::IndexMapIterMut\">IterMut</a>&lt;'a, K, V&gt;"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.IndexMapKeys.html\" title=\"struct heapless::IndexMapKeys\">Keys</a>&lt;'a, K, V&gt;"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.IndexMapValues.html\" title=\"struct heapless::IndexMapValues\">Values</a>&lt;'a, K, V&gt;"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.IndexMapValuesMut.html\" title=\"struct heapless::IndexMapValuesMut\">ValuesMut</a>&lt;'a, K, V&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.IndexSetIter.html\" title=\"struct heapless::IndexSetIter\">Iter</a>&lt;'a, T&gt;"],["impl&lt;'a, T, Idx, K, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.Iter.html\" title=\"struct heapless::sorted_linked_list::Iter\">Iter</a>&lt;'a, T, Idx, K, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,\n    Idx: <a class=\"trait\" href=\"heapless/sorted_linked_list/trait.SortedLinkedListIndex.html\" title=\"trait heapless::sorted_linked_list::SortedLinkedListIndex\">SortedLinkedListIndex</a>,\n    K: <a class=\"trait\" href=\"heapless/sorted_linked_list/trait.Kind.html\" title=\"trait heapless::sorted_linked_list::Kind\">Kind</a>,</div>"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Iter.html\" title=\"struct heapless::spsc::Iter\">Iter</a>&lt;'a, T, N&gt;"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/spsc/struct.IterMut.html\" title=\"struct heapless::spsc::IterMut\">IterMut</a>&lt;'a, T, N&gt;"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"heapless/struct.OldestOrdered.html\" title=\"struct heapless::OldestOrdered\">OldestOrdered</a>&lt;'a, T, N&gt;"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"proc_macro2/token_stream/struct.IntoIter.html\" title=\"struct proc_macro2::token_stream::IntoIter\">IntoIter</a>"]],
"syn":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.Iter.html\" title=\"struct syn::punctuated::Iter\">Iter</a>&lt;'a, T&gt;"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IterMut.html\" title=\"struct syn::punctuated::IterMut\">IterMut</a>&lt;'a, T&gt;"],["impl&lt;'a, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.Pairs.html\" title=\"struct syn::punctuated::Pairs\">Pairs</a>&lt;'a, T, P&gt;"],["impl&lt;'a, T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.PairsMut.html\" title=\"struct syn::punctuated::PairsMut\">PairsMut</a>&lt;'a, T, P&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IntoIter.html\" title=\"struct syn::punctuated::IntoIter\">IntoIter</a>&lt;T&gt;"],["impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"syn/punctuated/struct.IntoPairs.html\" title=\"struct syn::punctuated::IntoPairs\">IntoPairs</a>&lt;T, P&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()