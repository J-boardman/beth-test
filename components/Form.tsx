export default function Form() {
  return (
    <form class="flex gap-4" hx-post="/form-submission">
      <label>
        Name: 
        <input class="input input-bordered" type="text" name="name" />
      </label>
      <label>
        Email:
        <input class="input input-bordered" type="email" name="email" />
      </label>
      <button class="btn btn-primary">Submit</button>
    </form>
  );
}
