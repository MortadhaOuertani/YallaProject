import React from "react";

const Account = () => {
  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-gray-900">
      <main className="flex-1 p-2 md:p-10">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="mt-10">
            <h1 className="text-3xl font-bold">Paramètres du profil</h1>
            <p className="text-gray-500 ">
              Gérez vos informations de profil et vos préférences.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Photo de profil</CardTitle>
              <CardDescription>
                Mettez à jour votre photo de profil pour personnaliser votre
                compte.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar src="/placeholder-avatar.jpg" fallback="CN" />
                <div className="flex flex-col gap-2">
                  <Button variant="outline">Changer la photo</Button>
                  <Button size="sm" variant="ghost">
                    Supprimer la photo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Changer le mot de passe</CardTitle>
              <CardDescription>
                Mettez à jour votre mot de passe pour sécuriser votre compte.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InputField
                label="Mot de passe actuel"
                type="password"
                id="current-password"
              />
              <InputField
                label="Nouveau mot de passe"
                type="password"
                id="new-password"
              />
              <InputField
                label="Confirmer le mot de passe"
                type="password"
                id="confirm-password"
              />
            </CardContent>
            <CardFooter>
              <Button>Changer le mot de passe</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications par e-mail</CardTitle>
              <CardDescription>
                Choisissez ce que vous voulez être notifié par e-mail.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SwitchField
                label="Nouvelles mentions"
                description="Recevez une notification lorsque quelqu'un vous mentionne."
                id="email-mentions"
              />
              <SwitchField
                label="Nouveaux commentaires"
                description="Recevez une notification lorsque quelqu'un commente vos publications."
                id="email-comments"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Partager le profil</CardTitle>
              <CardDescription>
                Partagez votre profil avec d'autres en utilisant ce lien.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Input
                  readOnly
                  type="text"
                  value="https://example.com/profile/johndoe"
                />
                <Button variant="outline">Copier</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

const Card = ({ children }) => (
  <div className="card bg-white border rounded-lg ">{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="card-header p-4 border-b border-gray-200">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="card-title text-lg font-bold">{children}</h2>
);

const CardDescription = ({ children }) => (
  <p className="card-description text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children }) => (
  <div className="card-content p-4">{children}</div>
);

const CardFooter = ({ children }) => (
  <div className="card-footer p-4 border-t border-gray-200 dark:border-gray-700">
    {children}
  </div>
);

const InputField = ({ label, type, id }) => (
  <div className="grid gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} />
  </div>
);

const SwitchField = ({ label, description, id }) => (
  <div className="flex items-center justify-between">
    <div className="space-y-1">
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
    <Switch id={id} />
  </div>
);

const Avatar = ({ src, fallback }) => (
  <div className="avatar h-20 w-20">
    <div className="rounded-full">
      {src ? (
        <img src={src} alt={fallback} />
      ) : (
        <span className="fallback">{fallback}</span>
      )}
    </div>
  </div>
);

const Button = ({ children, variant = "default", size }) => (
  <button
    className={`btn ${
      variant === "outline"
        ? "btn-outline"
        : variant === "ghost"
        ? "btn-ghost"
        : ""
    } ${size === "sm" ? "btn-sm" : ""}`}
  >
    {children}
  </button>
);

const Label = ({ children, htmlFor }) => (
  <label className="label" htmlFor={htmlFor}>
    {children}
  </label>
);

const Input = ({ id, type, readOnly, value }) => (
  <input
    className="input input-bordered"
    id={id}
    type={type}
    readOnly={readOnly}
    value={value}
  />
);

const Switch = ({ id }) => <input type="checkbox" className="toggle" id={id} />;

export default Account;
