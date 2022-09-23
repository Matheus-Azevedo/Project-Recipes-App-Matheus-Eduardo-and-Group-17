import React, { useEffect } from 'react';
/* import { useHistory } from 'react-router-dom'; */

const NUMBER_SEVEN = 7;

function Login() {
  const [loginInfo, setLoginInfo] = React.useState({
    email: '',
    password: '',
    validationButton: true,
  });

  const validEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

  const validateButton = () => {
    const checkEmail = validEmail(loginInfo.email);
    if (checkEmail === true && loginInfo.password.length >= NUMBER_SEVEN) {
      setLoginInfo((prevState) => ({
        ...prevState,
        validationButton: false,
      }));
    } else {
      setLoginInfo((prevState) => ({
        ...prevState,
        validationButton: true,
      }));
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    validateButton();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo.password]);

  /*   const history = useHistory(); */
  const handleClick = async () => {
    console.log('dale');
    /*     history.push(); */
  };

  const checkDisable = loginInfo.validationButton === true;

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu email"
        data-testid="email-input"
        name="email"
        value={ loginInfo.email }
        onChange={ handleChange }
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
        name="password"
        onChange={ handleChange }
        value={ loginInfo.password }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick={ handleClick }
        disabled={ checkDisable }
      >
        Entrar

      </button>

    </div>
  );
}

export default Login;
