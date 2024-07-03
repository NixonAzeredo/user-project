import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserFormData, UserFormProps } from "./index.interface";

const UserForm = ({
  textBtnSend = "Enviar",
  textBtnBack = "Voltar",
  routeBack = "/",
  user,
  submit,
}: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    submit(data as UserFormData);
  };

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("username", user.username);
      setValue("phone", user.phone);
      setValue("email", user.email);
      setValue("website", user.website);
      setValue("zipcode", user.zipcode);
      setValue("city", user.city);
      setValue("street", user.street);
      setValue("suite", user.suite);
      setValue("companyName", user.companyName);
      setValue("catchPhrase", user.catchPhrase);
      setValue("bs", user.bs);
    }
  }, [user, setValue]);

  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Dados pessoais
          </h2>{" "}
          <hr />
        </div>
        <div className="col-span-2 sm:col-span-2">
          <TextField
            autoComplete="on"
            id="name"
            label="Nome"
            variant="outlined"
            className="w-full"
            {...register("name", {
              required: "Nome é obrigatório",
              minLength: {
                value: 3,
                message: "Nome deve ter no mínimo 3 caracteres",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">
              {errors.name.message as React.ReactNode}
            </p>
          )}
        </div>
        <div className="col-span-2 sm:col-span-2">
          <TextField
            autoComplete="on"
            id="username"
            label="Nome de usuário"
            variant="outlined"
            className="w-full"
            {...register("username", {
              required: "Nome de usuário é obrigatório",
              pattern: {
                value: /^\w+$/,
                message: "Nome de usuário inválido",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              {errors.username.message as React.ReactNode}
            </p>
          )}
        </div>
        <div className="col-span-1">
          <TextField
            autoComplete="on"
            id="phone"
            label="Telefone"
            variant="outlined"
            className="w-full"
            {...register("phone", {
              required: "Telefone é obrigatório",
              pattern: {
                value: /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/,
                message: "Formato de telefone inválido",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">
              {errors.phone.message as React.ReactNode}
            </p>
          )}
        </div>
        <div className="col-span-2 sm:col-span-2">
          <TextField
            autoComplete="on"
            id="email"
            label="Email"
            variant="outlined"
            className="w-full"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message as React.ReactNode}
            </p>
          )}
        </div>
        <div className="col-span-1 sm:col-span-1">
          <TextField
            autoComplete="on"
            id="website"
            label="Website"
            variant="outlined"
            className="w-full"
            {...register("website", {
              required: "Website é obrigatório",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Formato de website inválido",
              },
            })}
          />
          {errors.website && (
            <p className="text-red-500 text-xs italic">
              {errors.website.message as React.ReactNode}
            </p>
          )}
        </div>
        <div className="col-span-4 mt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Endereço</h2>{" "}
          <hr />
        </div>
        <div className="col-span-2">
          <TextField
            id="zipcode"
            label="CEP"
            variant="outlined"
            className="w-full"
            {...register("zipcode")}
          />
        </div>
        <div className="col-span-2">
          <TextField
            id="city"
            label="Cidade"
            variant="outlined"
            className="w-full"
            {...register("city")}
          />
        </div>
        <div className="col-span-1">
          <TextField
            id="street"
            label="Rua"
            variant="outlined"
            className="w-full"
            {...register("street")}
          />
        </div>
        <div className="col-span-3">
          <TextField
            id="suite"
            label="Complemento"
            variant="outlined"
            className="w-full"
            {...register("suite")}
          />
        </div>

        <div className="col-span-4 mt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Empresa</h2>{" "}
          <hr />
        </div>
        <div className="col-span-1">
          <TextField
            id="companyName"
            label="Nome da empresa"
            variant="outlined"
            className="w-full"
            {...register("companyName")}
          />
        </div>
        <div className="col-span-2 sm:col-span-2">
          <TextField
            id="catchPhrase"
            label="Frase de efeito"
            variant="outlined"
            className="w-full"
            {...register("catchPhrase")}
          />
        </div>
        <div className="col-span-1">
          <TextField
            id="bs"
            label="BS"
            variant="outlined"
            className="w-full"
            {...register("bs")}
          />
        </div>
        <div className="col-span-4 mt-4">
          <Button
            size="large"
            variant="contained"
            fullWidth
            type="submit"
            color="success"
          >
            {textBtnSend}
          </Button>
        </div>
        <div className="col-span-4 mt-1 mb-2">
          <Link to={routeBack}>
            <Button size="large" fullWidth type="button" color="inherit">
              {textBtnBack}
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
