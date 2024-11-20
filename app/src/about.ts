import { a, button, div, h1, h2, p, Page, raw } from "cradova";

export const aboutPage = new Page({
  snapshotIsolation: true,
  template() {
    return div(
      {
        className: "px-[20vw] py-[20vh]",
        onmount() {
          const wrapper = document.querySelector(
            "[data-wrapper]"
          ) as HTMLElement;
          if (wrapper.dataset.snapshot === "true") {
            alert("rendered from snapshot");
          }
        },
      },
      h1("Cradova", { className: "text-[5rem] mb-[1.2rem]" }),
      h2("What is Cradova?", { className: "text-[2rem]" }),
      p(`What is Cradova?
        Cradova is a web development framework for building Single Page Applications and PWAs.
        `),
      h2("What's the benefit?", { className: "text-[2rem] mt-[2rem]" }),
      p(`Fast and simple with and fewer abstractions and yet easily composable.
        Cradova is not built on diff algorithms. Instead, State management is done in a way that is simple, easy and fast.`),
      a(
        {
          href: "https://github.com/Uiedbook/cradova",
          className:
            "w-fit px-4 py-6 rounded-[999px] m-auto bg-[rebeccapurple] mt-[2rem]",
        },
        button("find more about cradova 💓", {
          className: "text-[#fff] text-[1.7rem]",
        })
      ),
      h2("How old is Cradova?", { className: "text-[2rem] mt-[2rem]" }),
      raw(`<div
        class="notranslate position-relative overflow-auto mt-12 w-fit m-auto bg-[rebeccapurple] p-6 text-[#f0f6fc]"
  dir="auto"
>
<pre><span class="pl-k">const</span> <span class="pl-v">Cradova</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Comp</span><span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">const</span> <span class="pl-kos">[</span><span class="pl-s1">year</span><span class="pl-kos">,</span> <span class="pl-s1">setYear</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-en">useState</span><span class="pl-kos">(</span><span class="pl-c1">3</span><span class="pl-kos">,</span> <span class="pl-smi">this</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-k">return</span> <span class="pl-en">h1</span><span class="pl-kos">(</span><span class="pl-s">"Cradova is "</span> <span class="pl-c1">+</span> <span class="pl-s1">year</span> <span class="pl-c1">+</span> <span class="pl-s">" yrs old in "</span><span class="pl-kos">,</span> <span class="pl-kos">{</span>
    <span class="pl-en">onclick</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
      <span class="pl-s1">setYear</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">lastYear</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
        <span class="pl-k">return</span> <span class="pl-s1">lastYear</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>
      <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
    <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-c1">body</span><span class="pl-kos">.</span><span class="pl-en">appendChild</span><span class="pl-kos">(</span><span class="pl-v">Cradova</span><span class="pl-kos">.</span><span class="pl-en">render</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
</div>`),
      h2("Here's a simple Todo component you want to see!", {
        className: "text-[2rem] mt-[2rem]",
      }),
      raw(`<div
class="notranslate position-relative overflow-auto mt-12 w-fit m-auto bg-[rebeccapurple] p-6 text-[#f0f6fc]"
  dir="auto"
  >
  <pre><span class="pl-k">import</span> <span class="pl-kos">{</span>
  <span class="pl-s1">button</span><span class="pl-kos">,</span>
  <span class="pl-v">Comp</span><span class="pl-kos">,</span>
  <span class="pl-s1">createSignal</span><span class="pl-kos">,</span>
  <span class="pl-s1">div</span><span class="pl-kos">,</span>
  <span class="pl-s1">h1</span><span class="pl-kos">,</span>
  <span class="pl-s1">input</span><span class="pl-kos">,</span>
  <span class="pl-s1">main</span><span class="pl-kos">,</span>
  <span class="pl-s1">p</span><span class="pl-kos">,</span>
  <span class="pl-s1">useRef</span><span class="pl-kos">,</span>
  <span class="pl-s1">useState</span><span class="pl-kos">,</span>
<span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">"../dist/index.js"</span><span class="pl-kos">;</span>
<span class="pl-c">// creating a store</span>
<span class="pl-k">const</span> <span class="pl-s1">todoStore</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Signal</span><span class="pl-kos">(</span><span class="pl-kos">{</span>
  <span class="pl-c1">todo</span>: <span class="pl-kos">[</span><span class="pl-s">"take bath"</span><span class="pl-kos">,</span> <span class="pl-s">"code coded"</span><span class="pl-kos">,</span> <span class="pl-s">"take a break"</span><span class="pl-kos">]</span><span class="pl-kos">,</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// create actions</span>
<span class="pl-k">const</span> <span class="pl-en">addTodo</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">todo</span>: <span class="pl-s1">string</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-s1">todoStore</span><span class="pl-kos">.</span><span class="pl-en">publish</span><span class="pl-kos">(</span><span class="pl-s">"todo"</span><span class="pl-kos">,</span> <span class="pl-kos">[</span>...<span class="pl-s1">todoStore</span><span class="pl-kos">.</span><span class="pl-c1">pipe</span><span class="pl-kos">.</span><span class="pl-c1">todo</span><span class="pl-kos">,</span> <span class="pl-s1">todo</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">const</span> <span class="pl-en">removeTodo</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">todo</span>: <span class="pl-s1">string</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">const</span> <span class="pl-s1">ind</span> <span class="pl-c1">=</span> <span class="pl-s1">todoStore</span><span class="pl-kos">.</span><span class="pl-c1">pipe</span><span class="pl-kos">.</span><span class="pl-c1">todo</span><span class="pl-kos">.</span><span class="pl-en">indexOf</span><span class="pl-kos">(</span><span class="pl-s1">todo</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-s1">todoStore</span><span class="pl-kos">.</span><span class="pl-c1">pipe</span><span class="pl-kos">.</span><span class="pl-c1">todo</span><span class="pl-kos">.</span><span class="pl-en">splice</span><span class="pl-kos">(</span><span class="pl-s1">ind</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-s1">todoStore</span><span class="pl-kos">.</span><span class="pl-en">publish</span><span class="pl-kos">(</span><span class="pl-s">"todo"</span><span class="pl-kos">,</span> <span class="pl-s1">todoStore</span><span class="pl-kos">.</span><span class="pl-c1">pipe</span><span class="pl-kos">.</span><span class="pl-c1">todo</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span>
<span class="pl-k">function</span> <span class="pl-v">TodoList</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-c">// can be used to hold multiple references</span>
  <span class="pl-k">const</span> <span class="pl-s1">referenceSet</span> <span class="pl-c1">=</span> <span class="pl-en">useRef</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-c">// bind Comp to Signal</span>
  <span class="pl-s1">todoStore</span><span class="pl-kos">.</span><span class="pl-en">subscribe</span><span class="pl-kos">(</span><span class="pl-s">"todo"</span><span class="pl-kos">,</span> <span class="pl-s1">todoList</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-c">// vjs</span>
  <span class="pl-k">return</span> <span class="pl-en">main</span><span class="pl-kos">(</span>
    <span class="pl-en">h1</span><span class="pl-kos">(</span><span class="pl-s">"Todo List"</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
    <span class="pl-en">div</span><span class="pl-kos">(</span>
      <span class="pl-en">input</span><span class="pl-kos">(</span><span class="pl-kos">{</span>
        <span class="pl-c1">placeholder</span>: <span class="pl-s">"type in todo"</span><span class="pl-kos">,</span>
        <span class="pl-c1">reference</span>: <span class="pl-s1">referenceSet</span><span class="pl-kos">.</span><span class="pl-en">bindAs</span><span class="pl-kos">(</span><span class="pl-s">"todoInput"</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
      <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">,</span>
      <span class="pl-en">button</span><span class="pl-kos">(</span><span class="pl-s">"Add todo"</span><span class="pl-kos">,</span> <span class="pl-kos">{</span>
        <span class="pl-en">onclick</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
          <span class="pl-en">addTodo</span><span class="pl-kos">(</span>
            <span class="pl-s1">referenceSet</span><span class="pl-kos">.</span><span class="pl-c1">elem</span><span class="pl-c1">&lt;</span><span class="pl-v">HTMLInputElement</span><span class="pl-c1">&gt;</span><span class="pl-kos">(</span><span class="pl-s">"todoInput"</span><span class="pl-kos">)</span><span class="pl-c1">!</span><span class="pl-kos">.</span><span class="pl-c1">value</span> <span class="pl-c1">||</span> <span class="pl-s">""</span>
          <span class="pl-kos">)</span><span class="pl-kos">;</span>
          <span class="pl-s1">referenceSet</span><span class="pl-kos">.</span><span class="pl-c1">elem</span><span class="pl-c1">&lt;</span><span class="pl-v">HTMLInputElement</span><span class="pl-c1">&gt;</span><span class="pl-kos">(</span><span class="pl-s">"todoInput"</span><span class="pl-kos">)</span><span class="pl-c1">!</span><span class="pl-kos">.</span><span class="pl-c1">value</span> <span class="pl-c1">=</span> <span class="pl-s">""</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span><span class="pl-kos">,</span>
      <span class="pl-kos">}</span><span class="pl-kos">)</span>
    <span class="pl-kos">)</span><span class="pl-kos">,</span>
    <span class="pl-s1">todoList</span>
  <span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>
<span class="pl-k">const</span> <span class="pl-s1">todoList</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Comp</span><span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">const</span> <span class="pl-s1">data</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">subData</span><span class="pl-kos">;</span>
  <span class="pl-k">return</span> <span class="pl-en">div</span><span class="pl-kos">(</span>
    <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-en">map</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">item</span>: <span class="pl-s1">any</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>
      <span class="pl-en">p</span><span class="pl-kos">(</span><span class="pl-s1">item</span><span class="pl-kos">,</span> <span class="pl-kos">{</span>
        <span class="pl-c1">title</span>: <span class="pl-s">"click to remove"</span><span class="pl-kos">,</span>
        <span class="pl-en">onclick</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
          <span class="pl-en">removeTodo</span><span class="pl-kos">(</span><span class="pl-s1">item</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span><span class="pl-kos">,</span>
      <span class="pl-kos">}</span><span class="pl-kos">)</span>
    <span class="pl-kos">)</span>
  <span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-c1">body</span><span class="pl-kos">.</span><span class="pl-en">appendChild</span><span class="pl-kos">(</span><span class="pl-v">TodoList</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre>
</div>
<p dir="auto" class="mt-8">Join Us on <a href="https://t.me/UiedbookHQ" rel="nofollow">telegram</a>.</p>
`),
      h2("Contribution and License Agreement", {
        className: "text-[2rem] mt-[2rem]",
      }),
      p(
        `If you contribute code to this project, you are implicitly allowing your code to be distributed under same license. You are also implicitly verifying that all code is your original work.`
      ),
      a(
        {
          href: "https://github.com/Uiedbook/cradova",
          className:
            "w-fit px-4 py-6 rounded-[999px] m-auto bg-[rebeccapurple] mt-[2rem]",
        },
        button("find more about cradova 💓", {
          className: "text-[#fff] text-[1.7rem]",
        })
      )
    );
  },
});
