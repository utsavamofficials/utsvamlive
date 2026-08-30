import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';
import { useAuth } from '../../hooks/useAuth';
import { apiErrorMessage } from '../../services/httpClient';
import { useToast } from '../../context/ToastContext';
import logo from '../../assets/UtsavamLogoMain.png';
import ganesha from '../../assets/animatedganesha.png';

function SignIn() {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        login,
        getUser,
        getRole,
        loading: authLoading,
    } = useAuth();

    const toast = useToast();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    /*
     * If a session already exists, don't show the login page.
     * Wait until useAuth() finishes checking the session first.
     */
    useEffect(() => {
        if (authLoading) return;

        const user = getUser();

        if (!user) return;

        const role = getRole() || user.actorType || user.role;

        // If user was originally trying to access a protected page,
        // send them there after restoring their session.
        const redirectTo = location.state?.from?.pathname;

        if (redirectTo) {
            navigate(redirectTo, { replace: true });
            return;
        }

        switch (role) {
            case 'COLLECTION_EXECUTIVE':
                navigate('/em/dashboard', { replace: true });
                break;

            case 'EVENT_ORGANIZER':
                navigate('/admin/dashboard', { replace: true });
                break;

            case 'SUPER_ADMIN':
                navigate('/superadmin/dashboard', { replace: true });
                break;

            default:
                // Session exists but the role isn't mapped.
                // Keep the user on the page rather than creating
                // an endless redirect loop.
                console.warn('No dashboard mapped for role:', role);
                break;
        }
    }, [authLoading, getUser, getRole, navigate, location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const validate = () => {
        const next = {};

        if (!formData.username.trim()) {
            next.username = 'Username is required.';
        }

        if (!formData.password) {
            next.password = 'Password is required.';
        }

        return next;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);

        try {
            const account = await login(formData);

            toast.success('Login successful!');

            const role = account.role ?? account.actorType;

            const redirectTo = location.state?.from?.pathname;

            if (redirectTo) {
                navigate(redirectTo, { replace: true });
                return;
            }

            switch (role) {
                case 'COLLECTION_EXECUTIVE':
                    navigate('/em/dashboard', { replace: true });
                    break;

                case 'EVENT_ORGANIZER':
                    navigate('/admin/dashboard', { replace: true });
                    break;

                case 'SUPER_ADMIN':
                    navigate('/superadmin/dashboard', { replace: true });
                    break;

                default:
                    toast.info(
                        'Logged in, but no dashboard is mapped for this role yet.'
                    );
                    break;
            }
        } catch (error) {
            toast.error(
                apiErrorMessage(
                    error,
                    'Login failed. Please check your credentials.'
                )
            );
        } finally {
            setSubmitting(false);
        }
    };

    /*
     * Don't render the login form while we're checking
     * whether an existing session is available.
     */
    if (authLoading) {
        return (
            <div className="ep-festive-bg d-flex align-items-center justify-content-center vh-100">
                <div className="text-center text-white">
                    <div
                        className="spinner-border"
                        role="status"
                        aria-hidden="true"
                    ></div>
                    <div className="mt-3">
                        Restoring your session...
                    </div>
                </div>
            </div>
        );
    }

    /*
     * If a user exists, the redirect effect above will handle navigation.
     * Don't render the login form in the meantime.
     */
    if (getUser()) {
        return (
            <div className="ep-festive-bg d-flex align-items-center justify-content-center vh-100">
                <div className="text-center text-white">
                    <div
                        className="spinner-border"
                        role="status"
                        aria-hidden="true"
                    ></div>
                        <div className="mt-3">
                        Redirecting...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="ep-festive-bg d-flex align-items-center justify-content-center py-5 px-3">
            <div
                className="row w-100 justify-content-center align-items-center"
                style={{ maxWidth: 960 }}
            >
                {/* Left: brand / mascot panel */}
                <div
                    className="col-lg-5 d-none d-lg-flex flex-column align-items-center text-center text-white px-4"
                    data-aos="fade-right"
                >
                    <img
                        src={logo}
                        alt="ePavti Book"
                        style={{
                            width: 190,
                            marginBottom: '1.5rem',
                        }}
                    />

                    <img
                        src={ganesha}
                        alt=""
                        className="ep-float"
                        style={{
                            width: 200,
                            marginBottom: '1.5rem',
                        }}
                    />

                    <h2 className="fw-bold">Welcome back</h2>

                    <p className="opacity-75">
                        Sign in to manage receipts, track collections,
                        and keep this festival's records organized.
                    </p>
                </div>

                {/* Right: form */}
                <div
                    className="col-lg-6 col-md-8 col-12"
                    data-aos="fade-up"
                >
                    <div className="ep-glass-card overflow-hidden">
                        <div className="ep-festive-accent-bar"></div>

                        <div className="p-4 p-md-5">
                            <div className="text-center mb-4 d-lg-none">
                                <img
                                    src={logo}
                                    alt="ePavti Book"
                                    style={{ width: 210 }}
                                />
                            </div>

                            <h1 className="h3 fw-bold text-center mb-1">
                                Sign In
                            </h1>

                            <p className="text-muted text-center mb-4">
                                Enter your credentials to continue
                            </p>

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your username"
                                        className={`form-control ${
                                            errors.username
                                                ? 'ep-field-invalid'
                                                : ''
                                        }`}
                                        autoComplete="username"
                                    />

                                    {errors.username && (
                                        <div className="ep-field-error">
                                            {errors.username}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <div className="ep-input-group">
                                        <input
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            className={`form-control ${
                                                errors.password
                                                    ? 'ep-field-invalid'
                                                    : ''
                                            }`}
                                            autoComplete="current-password"
                                        />

                                        <button
                                            type="button"
                                            className="ep-input-icon-btn"
                                            onClick={() =>
                                                setShowPassword((s) => !s)
                                            }
                                            aria-label={
                                                showPassword
                                                    ? 'Hide password'
                                                    : 'Show password'
                                            }
                                            tabIndex={-1}
                                        >
                                            <i
                                                className={`bi ${
                                                    showPassword
                                                        ? 'bi-eye-slash'
                                                        : 'bi-eye'
                                                }`}
                                            ></i>
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <div className="ep-field-error">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-festive w-100 py-2 mt-2"
                                    disabled={submitting}
                                >
                                    {submitting ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            Signing in...
                                        </>
                                    ) : (
                                        'Sign In'
                                    )}
                                </button>

                                {/* <p className="text-center text-muted mt-4 mb-0">
                                    <Link
                                        to="/signup"
                                        className="fw-semibold"
                                    >
                                        Forgot your password?
                                    </Link>
                                </p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
