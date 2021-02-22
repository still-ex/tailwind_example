defmodule StillTailwind.PostcssPreprocessor do
  use Still.Preprocessor

  @impl true
  def extension(_) do
    ".css"
  end

  @impl true
  def render(file) do
    input_file =
      file
      |> Still.Utils.get_input_path()

    {:ok, content} = NodeJS.call({"index", :processCSS}, [input_file])

    %{file | content: content}
  end
end
