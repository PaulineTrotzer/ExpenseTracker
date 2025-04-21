import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.enum(["Groceries", "Utilities", "Entertainment"], {
    errorMap: () => ({ message: "Please select a valid category" }),
  }),
});

type FormData = z.infer<typeof schema>;

const ExpanseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur", // oder "onChange" bzw. "all"
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label"></label>
        <p>Description</p>
        <input
          {...register("description")}
          id="desc"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label"></label>
        <p>Amount</p>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label"></label>
        <p>Category</p>
        <input
          {...register("category")}
          list="categories"
          id="category"
          className="form-control"
        />
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <datalist id="categories">
        <option value="Groceries"></option>
        <option value="Utilities"></option>
        <option value="Entertainment"></option>
      </datalist>

      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpanseForm;
